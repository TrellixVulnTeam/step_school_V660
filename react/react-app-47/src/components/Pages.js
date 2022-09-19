import { Fragment, useState, useEffect } from 'react';
import { User } from './User';
import { Controls } from './Controls';
import { validate } from '../helpers/validate';
import { Figure } from './Figure';

export const Pages = ({ skipSize, limitSize }) => {

    const [users, setUsers] = useState([]);
    const [skip, setSkip] = useState(validate(skipSize));
    const [limit, setLimit] = useState(validate(limitSize));
    const [activeUser, setActiveUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const isEmptyUser = Object.keys(activeUser).length === 0;

    useEffect(() => {

        const getUsers = async url => {
            setIsLoading(true)
            const response = await fetch(url);
            const { users } = await response.json();
            setUsers(users);
            setIsLoading(false)
        }

        getUsers(`http://dummyjson.com/users/?skip=${skip}&limit=${limit}`);

    }, [skip, limit])

    const handleSkip = value => setSkip(value);
    const handleLimit = value => setLimit(value);
    const handleAddClass = user => setActiveUser(user);
    // const handleSetActiveUser = user => setActiveUser(user);

    return (
        <Fragment>
            <table>
            <thead>
                <tr>
                <th>ID</th>
                <th>User&nbsp;Name</th>
                <th>Email</th>
                </tr>
            </thead>
            <tbody>
                    { users.map(user => <User 
                                            active={activeUser === user ? 'active' : ''}
                                            key={ user.id } 
                                            user={ user } 
                                            onAddClass={ handleAddClass }
                                            activeID={ activeUser?.id === user.id ? 'active' : ''}
                                        />) }
            </tbody>
            </table>
            <Controls 
                onSkip={ handleSkip } 
                onLimit={ handleLimit }
                skip={ skip }
                limit={ limit }
                // activeUser={ activeUser }
                // onSetActiveUser={ handleSetActiveUser }
                />
            {   isLoading ? <h1>Loading...</h1>
              : isEmptyUser ? '' : <Figure user={ activeUser }/> 
            }
        </Fragment>
    ) 
}











































// export const Pages = () => {
//     const [users,setUsers]=useState([])
   
    
//     useEffect(()=>{
//       async function loadData(){
//         const response=await fetch('http://dummyjson.com/users');
//         const json= await response.json();
//         console.log(json);
//         setUsers(json.users)
//       }
//       loadData()
      
//     },[])

  
//     return(
//         <table>
//           <thead>
//             <tr>
//               <th>id</th>
//               <th>first name</th>
//               <th>last name</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map(us=>
//               <tr 
//               key={us.id}
//               > 
//                 <td>{us.id}</td>
//                 <td>{us.firstName}</td>
//                 <td>{us.lastName}</td>
//               </tr>
//               )}
//           </tbody>
//         </table>
//     )
//   }
