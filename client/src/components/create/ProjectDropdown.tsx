import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react'
import {BottomSheetBackdrop, BottomSheetModal} from "@gorhom/bottom-sheet";
import {StyleSheet, Text, View} from "react-native";
import {useQuery} from "@apollo/client";

//import constants
import {family, size} from "../../constants/styleConstants";
import {concatProjects, defaultProjects} from "../../constants/projects";
import storageConstants from "../../constants/storageConstants";

//import components
import AppPicker from "../forms/AppPicker";
import CreateProjectForm from "../forms/CreateProjectForm";

//import queries
import {FIND_PROJECT} from "../../server/queries";

const ProjectDropdown: React.FC = ({project, setProject}) => {
    const {refetch} = useQuery(FIND_PROJECT);

    const [projects, setProjects] = useState(defaultProjects)
    const [fetchProject, setFetchProject] = useState<boolean>(true)

    const bSMRef = useRef<BottomSheetModal>(null)
    const points = useMemo(() => ['5%', '45%'], [])
    const backdrop = useCallback((props) => <BottomSheetBackdrop {...props} />, []);
    const handlePresentModalPress = useCallback(() => bSMRef.current?.present(), [])

    const getProject = async () => {
        const storageProject = await storageConstants.get("project")
        if (storageProject !== null) {
            setProject(storageProject)
            storageConstants.remove("project")
        }
    }

    useEffect(() => {
        getProject()
        project === "jvcunpe" && handlePresentModalPress()
    }, [project])

    useEffect(() => {
        refetch().then(({data}) => {
            data.findProject.code === "202" && setProjects(concatProjects(data.findProject.projects))
        })
    }, [fetchProject])

    return (
        <View>
            <AppPicker
                title="Associer à un projet ?"
                items={projects}
                setValue={setProject}
                value={project}
            />

            <BottomSheetModal
                ref={bSMRef}
                index={1}
                snapPoints={points}
                backdropComponent={backdrop}
                onDismiss={() => setProject(projects[0].value)}
            >
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>Créer un nouveau projet</Text>
                    <CreateProjectForm setFetchProject={setFetchProject} ref={bSMRef}/>
                </View>
            </BottomSheetModal>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: family.bold,
        fontSize: 20,
        marginBottom: 10,
        alignSelf: "center"
    },
    contentContainer: {
        paddingHorizontal: size.paddingContainer
    },
});

export default ProjectDropdown;
