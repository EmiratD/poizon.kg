import Stages from "./stage/Stage";
import {WorkflowSvg,  CheckSvg, BoxSvg, DeliverySvg, SearchSvg, EditSvg, TruckSvg} from "../../assets/svg/workflowSvg";

const Workflow = () => {

  const stagesArr = [
    {
      text:'РАЗМЕЩЕНИЕ ЗАКАЗА',
      svg: EditSvg,
    },
    {
      text:'ДОСТАВКА НА СКЛАД POIZON',
      svg: TruckSvg,
    },
    {
      text:'ПРЕДВАРИТЕЛЬНАЯ ПРОВЕРКА',
      svg: SearchSvg,
    },
    {
      text:'ПОДТВЕРЖДЕНИЕ НА ПОДЛИННОСТЬ',
      svg: CheckSvg,
    },
    {
      text:'ФИРМЕННАЯ УПАКОВКА',
      svg: BoxSvg,
    },
    {
      text:'ОТПРАВКА КЛИЕНТУ',
      svg: DeliverySvg,
    },
  ];

  return (
    <section className="workflow">
      <h2 className="workflow-title">БИЗНЕС ПРОЦЕСС POIZON</h2>
      <div className="workflow-container">
        <div className="workflow-container__info">
          {stagesArr.map(data => <Stages text={data.text} svg={data.svg}/>)}
        </div>
        <div className="workflow-container__img">
          <WorkflowSvg/>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
