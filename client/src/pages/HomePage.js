import React from 'react';
import Map from '../components/Map/Map';
import StatsPanel from '../components/StatsPanel/StatsPanel';
// import SubmitBtn from '../components/SubmitBtn/SubmitBtn';
import NotificationCenter from '../components/Notifications/NotificationCenter';


const HomePage = props => {
    return (
      <div className="page-root">
				<main>
					<Map/>
					<NotificationCenter/>
					{(process.env.NODE_ENV !== 'production') && <StatsPanel/> }
				</main>
      </div>
    );
}

export default HomePage;
