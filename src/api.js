const BASE_URI = "https://fifa-1rg5.onrender.com";

export async function RightForwardApi({ setIsFetching, setTopPlayersData, setIsFailed }) {
    setIsFetching(true)
    try {
        await fetch(`${BASE_URI}/Right-Forward`)
            .then(res => res.json())
            .then(result => setTopPlayersData(result))
            .catch(err => setIsFailed(true));
    } catch (err) {
        setIsFailed(true)
    }
    setIsFetching(false)

};

export async function LeftForwardApi({ setIsFetching, setTopPlayersData, setIsFailed }) {
    setIsFetching(true)
    try {
        await fetch(`${BASE_URI}/Left-Forward`)
            .then(res => res.json())
            .then(result => setTopPlayersData(result))
            .catch(err => setIsFailed(true));
    } catch (err) {
        setIsFailed(true)
    }
    setIsFetching(false)

};


export async function RightMidApi({ setIsFetching, setTopPlayersData, setIsFailed }) {
    setIsFetching(true)
    try {
        await fetch(`${BASE_URI}/Right-Mid`)
            .then(res => res.json())
            .then(result => setTopPlayersData(result))
            .catch(err => setIsFailed(true));
    } catch (err) {
        setIsFailed(true)
    }
    setIsFetching(false)

};

export async function LeftMidApi({ setIsFetching, setTopPlayersData, setIsFailed }) {
    setIsFetching(true)
    try {
        await fetch(`${BASE_URI}/Left-Mid`)
            .then(res => res.json())
            .then(result => setTopPlayersData(result))
            .catch(err => setIsFailed(true));
    } catch (err) {
        setIsFailed(true)
    }
    setIsFetching(false)

};


export async function RightBackApi({ setIsFetching, setTopPlayersData, setIsFailed }) {
    setIsFetching(true)
    try {
        await fetch(`${BASE_URI}/Right-Back`)
            .then(res => res.json())
            .then(result => setTopPlayersData(result))
            .catch(err => setIsFailed(true));
    } catch (err) {
        setIsFailed(true)
    }
    setIsFetching(false)

};

export async function LeftBackApi({ setIsFetching, setTopPlayersData, setIsFailed }) {
    setIsFetching(true)
    try {
        await fetch(`${BASE_URI}/Left-Back`)
            .then(res => res.json())
            .then(result => setTopPlayersData(result))
            .catch(err => setIsFailed(true));
    } catch (err) {
        setIsFailed(true)
    }
    setIsFetching(false)

};


export async function CentreBachApi({ setIsFetching, setTopPlayersData, setIsFailed }) {
    setIsFetching(true)
    try {
        await fetch(`${BASE_URI}/Centre-Back`)
            .then(res => res.json())
            .then(result => setTopPlayersData(result))
            .catch(err => setIsFailed(true));
    } catch (err) {
        setIsFailed(true)
    }
    setIsFetching(false)

};

export async function GoalKeeperApi({ setIsFetching, setTopPlayersData, setIsFailed }) {
    setIsFetching(true)
    try {
        await fetch(`${BASE_URI}/Goal-Keeper`)
            .then(res => res.json())
            .then(result => setTopPlayersData(result))
            .catch(err => setIsFailed(true));
    } catch (err) {
        setIsFailed(true)
    }
    setIsFetching(false)

};

export async function StrikerApi({ setIsFetching, setTopPlayersData, setIsFailed }) {
    setIsFetching(true)
    try {
        await fetch(`${BASE_URI}/Stricker`)
            .then(res => res.json())
            .then(result => setTopPlayersData(result))
            .catch(err => setIsFailed(true));
    } catch (err) {
        setIsFailed(true)
    }
    setIsFetching(false)

};

