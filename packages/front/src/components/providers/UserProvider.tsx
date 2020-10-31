import { GetUserQuery, useGetUserQuery, useMeQuery } from "graphqlTypes";
import React, { useEffect } from "react";

export const UserContext = React.createContext<GetUserQuery["user"]>({});

const UserProvider: React.FC = ({ children, value, refetchUser }) => {
  const { data: dataMe } = useMeQuery();
  const { data: dataUser, refetch } = useGetUserQuery({
    variables: {
      id: dataMe?.me.id,
    },
  });
  useEffect(()=>{
    if(refetch) refetch();
  },[refetchUser])
  return (
    <UserContext.Provider value={dataUser?.user}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
