import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_LATEST_NEWS } from "../../redux/constants";
import News from "../../components/news/News";

const LatestNews = () => {
    const { latestNews } = useSelector(store => store?.newsReducer || {});
    const { latestNewsError } = useSelector(store => store?.errorsReducer || {});
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: GET_LATEST_NEWS });
    }, [dispatch]);

    return(
        <div>
            <News news={latestNews} error={latestNewsError} title="Latest News" />
        </div>
    );
};

export default LatestNews;