import axios from "../utils/Axios.jsx";
import React , { useEffect, useState } from "react";

const Services = () => {
    const [first, setFirst] = useState( 0 );
    const [second, setSecond] = useState( 0 );

    const [users, setUsers] = useState( [] );

    const getUsers = () => {
        // const api = "https://fakestoreapi.com/users";

        axios.get( "/users" ).then( ( users ) => {
            setUsers( () => users.data )
        } ).catch( ( err ) => {
            console.log( err );;
        } );

    };

    useEffect( () => {

        getUsers();

        console.log( "Component has been created!" );

        return () => {
            console.log( "Component has been deleted!" );
        };
    }, [] );

    return (
        <div className="p-10 bg-green-200 text-2xl flex flex-col gap-5">
            <button
                onClick={ () => setFirst( ( first ) => first + 1 ) }
                className="w-fit py-1 px-3 rounded-sm bg-purple-300"
            >
                `You clicked ${ first } times`
            </button>
            <button
                onClick={ () => setSecond( ( second ) => second + 1 ) }
                className="w-fit py-1 px-3 rounded-sm bg-orange-400"
            >
                You clicked ${ second } times
            </button>

            <div className="mt-5 border-t-2 border-red-700 pt-5">
                { users.length > 0 ? users.map( ( user, index ) => {
                    return <div key={index} className="bg-violet-200 py-1 px-3 my-2 w-1/2">`<span className="text-bold text-rose-700">Email</span>:${ user.email }  <span className="text-bold text-rose-700" >Username</span>:${ user.username }`</div>
                } ) : "Users Loading..." }
            </div>
        </div>
    );
};

export default Services;
