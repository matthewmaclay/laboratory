import { GetUserQuery, useGetUserQuery, useMeQuery } from "graphqlTypes";
import React from "react";




export const UserContext = React.createContext<GetUserQuery['user']>({});




const UserProvider: React.FC = ({ children, value }) => {
    const { data: dataMe } = useMeQuery();
    const { data: dataUser } = useGetUserQuery({
      variables: {
        id: dataMe?.me.id,
      },
    });
return <UserContext.Provider value={dataUser?.user}>{children}</UserContext.Provider>;
};

export default UserProvider;
