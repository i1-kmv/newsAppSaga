import {useDispatch, useSelector} from "react-redux"
import {getNewsAC} from "./redux/actions/actionCreator"
import News from "./components/news/News";

function App() {

    const dispatch = useDispatch()

    const popularNews = useSelector(store => store?.newsReducer?.popularNews)
    const latestNews = useSelector(store => store?.newsReducer?.latestNews)
    const popularNewsError = useSelector(store => store?.errorsReducer?.popularNewsError)
    const latestNewsError = useSelector(store => store?.errorsReducer?.latestNewsError)


    const getHandleNews = () => {
        dispatch(getNewsAC())
    }

  return (
    <div>
      <button onClick={getHandleNews}>Get News!</button>
        <News news={popularNews} title={'popular news'} error={popularNewsError}/>
        <News news={latestNews} title={'latestNews'} error={latestNewsError}/>
    </div>
  );
}

export default App;
