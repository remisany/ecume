import {IResolvers} from "@graphql-tools/utils"

const passwordResolvers: IResolvers = {
    Mutation: {
        forgot: async (_, data) => {
            try {
                //input: email
                //generate password
                //update password
                //hasChangePassword => false
                //send mail

                return {code: "202"}
            } catch {
                return {code: "500"}
            }
        },
        define: async (_, data) => {
            //input: token
            //update password
            //hasChangePassword => true
            //return new token
        }
    }
};

export default passwordResolvers;
