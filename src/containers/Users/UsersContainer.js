import { OrderDirection } from "../../enums/OrderDirection";
import { useSort } from "../../hooks/useSort";
import './style.scss';

const sortOptions = {
    fullName: ['firstName', 'lastName'],
    active: 'active'
}

export const UsersContainer = () => {
    const [state, setState, {
        orderBy,
        orderDirection
    }] = useSort([
        {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            active: true
        },
        {
            id: 2,
            firstName: 'A',
            lastName: 'B',
            active: false
        },
        {
            id: 3,
            firstName: 'a',
            lastName: 'a',
            active: true
        },
        {
            id: 4,
            firstName: 'A',
            lastName: 'A',
            active: false
        },
    ], 'active', OrderDirection.desc);


    return <div className='users-container'>
        <table>
            <thead>
                <tr>
                    <th>
                        Full name
                        <button 
                            onClick={() => setState(state, sortOptions.fullName)}
                        >
                            <span className={
                                (orderDirection === OrderDirection.desc && orderBy === sortOptions.fullName) ? 'active' : ''
                            }>⬆️</span>
                            <span className={
                                (orderDirection === OrderDirection.asc && orderBy === sortOptions.fullName) ? 'active' : ''
                            }>⬇️</span>
                        </button>
                    </th>
                    <th>
                        Active 
                        <button 
                            onClick={() => setState(state, sortOptions.active)}
                        >
                            <span className={
                                (orderDirection === OrderDirection.desc && orderBy === sortOptions.active) ? 'active' : ''
                            }>⬆️</span>
                            <span className={
                                (orderDirection === OrderDirection.asc && orderBy === sortOptions.active) ? 'active' : ''
                            }>⬇️</span>
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    state.map(user => {
                        return <tr key={user.id}>
                            <td>{user.firstName} {user.lastName}</td>
                            <td className={user.active ? 'green' : 'red'}></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
}
