import { useDispatch, useSelector } from "react-redux"
import { useContext } from "react"
import { userDelete } from "../store/reducer/UserReducer"
import { userContext } from "../context/UserContext"

function User () {

  const { users } = useSelector( state => state.userReducer )

  const dispatch = useDispatch()

  const deleteHandler = ( index ) => {
    // console.log( id );
    dispatch( userDelete( index ) )
  }

  const [val, setval] = useContext( userContext )


  return (
    <div className=" max-w-screen-lg h-screen mx-auto py-5 ">
      <h1 className="px-5 font-bold text-2xl">User List - <button onClick={ () => setval( prev => prev + 1 ) } >{ val }</button></h1>
      <div className="p-5 font-semibold text-xl">
        { users.map( ( user, index ) => {
          return <div key={ user.id } >{ user.name } <span onClick={ () => deleteHandler( index ) } className="mx-3 cursor-pointer text-2xl font-black">x</span></div>
        } ) }
      </div>
    </div>
  )
}

export default User
