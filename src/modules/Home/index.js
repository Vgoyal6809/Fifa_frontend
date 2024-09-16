
import React, { useEffect, useState } from 'react';
import { CentreBachApi, GoalKeeperApi, LeftBackApi, LeftForwardApi, LeftMidApi, RightBackApi, RightForwardApi, RightMidApi } from '../../api';

const Home = () => {

    const [topPlayersData, setTopPlayersData] = useState('');
    const [isFetching, setIsFetching] = useState(true);
    const [isFailed, setIsFailed] = useState(false);
    const ButtonDetails = [
        {
            label: 'Left Forward',
            action: () => LeftForwardApi({ setIsFetching, setTopPlayersData, setIsFailed }),
        },
        {
            label: 'Left Mid',
            action: () => LeftMidApi({ setIsFetching, setTopPlayersData, setIsFailed })
        },
        {
            label: 'Left Back',
            action: () => LeftBackApi({ setIsFetching, setTopPlayersData, setIsFailed })
        },
        {
            label: 'Right Back',
            action: () => RightBackApi({ setIsFetching, setTopPlayersData, setIsFailed })
        },
        {
            label: 'Right Mid',
            action: () => RightMidApi({ setIsFetching, setTopPlayersData, setIsFailed })
        },
        {
            label: 'Right Forward',
            action: () => RightForwardApi({ setIsFetching, setTopPlayersData, setIsFailed })
        },
        {
            label: 'Centre Back',
            action: () => CentreBachApi({ setIsFetching, setTopPlayersData, setIsFailed })
        },
        {
            label: 'Goal Keeper !!',
            // action: () => GoalKeeperApi({ setIsFetching, setTopPlayersData, setIsFailed })
        },
    ]

    return (
        <div>
            <h1>Fetch Data from Jupyter Notebook</h1>
            {ButtonDetails?.map((data, id) => {
                return (
                    <button key={id} onClick={data?.action}>{data?.label}</button>
                )
            })}

            {topPlayersData && topPlayersData?.data?.map((data, id) => {
                return (
                    <>
                        <h3 key={id}>{data?.ID} -- {data?.Name}</h3>
                        <p>{data?.Actual_Potential}</p>
                        <p>{data?.Predicted_Potential}</p>
                    </>
                )
            })}
        </div>
    );
};

export default Home;
