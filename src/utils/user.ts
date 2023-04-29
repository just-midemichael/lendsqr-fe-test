

export type AllContextType = {
    users?: any
    
    user?: null
    username?: string 
    setUser?: React.Dispatch<React.SetStateAction< | null>>
    setUsername?: React.Dispatch<React.SetStateAction< | null>>
    
    login: any
    logout: any
    slice?(start?: number | undefined, end?: number | undefined): string

    sideNav?: string | undefined
    setSideNav?: React.Dispatch<React.SetStateAction< | null>>
    sideNavDisplayHandler: any

    toggleBar?: string | undefined
    setToggleBar?: React.Dispatch<React.SetStateAction< | null>>
    

    smallSearchBox?: string | undefined
    setSmallSearchBox?: React.Dispatch<React.SetStateAction< | null>>
    SmallSearchBoxDisplayhandler?: any

    filterBox?: string | undefined
    setFilterBox?: React.Dispatch<React.SetStateAction< | null>>
    filterBoxDisplayhandler?: any

    usersDetail?: any
    setUsersDetail?: React.Dispatch<React.SetStateAction< | null>>
    error?: string | undefined
    setError?: React.Dispatch<React.SetStateAction< | null>>
    loading?: boolean
    setLoading?: React.Dispatch<React.SetStateAction< | null>>


}
export type ContextProviderProps = {
    children: React.ReactNode
}

export type userApiProps = {
    id?: number
    email?: string
    userName?: string
}

export type mockApiProps = {
    id?: React.Key | null | undefined; 
    orgName?: string; 
    userName?: string; 
    email?: string; 
    phoneNumber?: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; 
    createdAt?: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; 
    lastActiveDate?: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined
    
    user: { id: React.Key | null | undefined; orgName: string; userName: string; email: string; phoneNumber: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; createdAt: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; lastActiveDate: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }
    
}