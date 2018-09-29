import React from 'react';
import Map from '../components/Map/Map';
import StatsPanel from '../components/StatsPanel/StatsPanel';
// import SubmitBtn from '../components/SubmitBtn/SubmitBtn';

const HomePage = props => {
    return (
      <div className="page-root">
				<main>
					<Map/>
					<StatsPanel/>
					{/* <SubmitBtn/> */}
				</main>
      </div>
    );
}

export default HomePage;
