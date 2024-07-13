import ProduceDetails from './ProduceDetails';
import './ProduceList.css';
import { useDispatch, useSelector } from 'react-redux';
import { populatedProduce } from '../../store/produce';
import produceData from '../../mockData/produce.json'
import { useEffect } from 'react';


function ProduceList() {
  const dispatch = useDispatch()
  const produce = useSelector(state=> state.produce)
  const produceArr = Object.values(produce)
  console.log(produceArr)
  useEffect(()=> {
    dispatch(populatedProduce(produceData))
  }, [dispatch])


  return (
    <>
      <h2>All produce</h2>
      {!produceArr.length && <span>No produce available right now.</span>}
      <ul className="produce-list">
        {produceArr.map((produce) => (
          <ProduceDetails key={produce.id + produce.name} produce={produce} />
        ))}
      </ul>
    </>
  );
}

export default ProduceList;
