import React from 'react'
import {useParams} from 'react-router-dom'
import {StatContext} from '../StatProvider'
import List from './List'
function Profile() {
    document.body.className = "body-no-bg-image"
    const {platform, gamertag} = useParams();
    const context = React.useContext(StatContext);
    let stats = context.state.profileData
    React.useEffect(() => {
        context.getStats(platform, gamertag)
    }, [])

    if(context.state.loading === true){
        return (
        <div className='loading'>
            <h1>Loading..</h1>
        </div>
        
        )
    }
    else return (
            <div className = 'player-profile'>
                <div className='header'>
                    <div className='player-profile-img'>
                        <img src={stats.platformInfo.avatarUrl} alt=''/>
                    </div>
                    <h1>{stats.platformInfo.platformUserId}</h1>
                    <h1>{stats.platformInfo.platformSlug}</h1> 
                </div>
                <div>
                    <List legendsArray={stats.segments}/>
                </div>
            </div>
        )
    

}


export default Profile
