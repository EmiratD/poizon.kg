import Stages from "./stage/Stage";
import {
  WorkflowSvg,
  CheckSvg,
  BoxSvg,
  DeliverySvg,
  SearchSvg,
  EditSvg,
  TruckSvg,
} from "../../assets/svg/workflowSvg";

const Workflow = () => {
  const stagesArr = [
    {
      text: "РАЗМЕЩЕНИЕ ЗАКАЗА",
      Svg: EditSvg,
    },
    {
      text: "ДОСТАВКА НА СКЛАД POIZON",
      Svg: TruckSvg,
    },
    {
      text: "ПРЕДВАРИТЕЛЬНАЯ ПРОВЕРКА",
      Svg: SearchSvg,
    },
    {
      text: "ПОДТВЕРЖДЕНИЕ НА ПОДЛИННОСТЬ",
      Svg: CheckSvg,
    },
    {
      text: "ФИРМЕННАЯ УПАКОВКА",
      Svg: BoxSvg,
    },
    {
      text: "ОТПРАВКА КЛИЕНТУ",
      Svg: DeliverySvg,
    },
  ];

  return (
    <section className="workflow">
      <h2 className="workflow-title">БИЗНЕС ПРОЦЕСС POIZON</h2>
      <div className="workflow-container">
        <div className="workflow-container__info">
          {stagesArr.map((data) => (
            <Stages key={data.text} text={data.text} Svg={data.Svg} />
          ))}
        </div>
        <div className="workflow-container__img">
          <WorkflowSvg />
        </div>
      </div>
    </section>
  );
};

export default Workflow;
