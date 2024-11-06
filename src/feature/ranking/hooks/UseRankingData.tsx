import { useState, useEffect } from 'react';
import RankingJson from '../components/RankingGraph.json';
import RankingType from '../types/RankingType';

const UseRankingData = () => {
    const [top3, setTop3] = useState<RankingType[]>([]);
    const [otherRank, setOtherRank] = useState<RankingType[]>([]);

    useEffect(() => {
        const loadRankingData = async () => {
            const data: RankingType[] = RankingJson;
            setTop3(data.slice(0, 3));
            setOtherRank(data.slice(3));
        };

        loadRankingData();
    }, []);

    return { top3, otherRank };
};

export default UseRankingData;