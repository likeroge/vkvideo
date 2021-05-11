import { Panel, PanelHeader, PanelHeaderBack } from "@vkontakte/vkui";

const Video = (props) => {
  return (
    <Panel id={props.id}>
      <PanelHeader left={<PanelHeaderBack onClick={props.go} data-to="home" />}>Football</PanelHeader>
      <video autoPlay controls>
        <source src="https://airfd.site/video" type="video/mp4"/> 
      </video>
    </Panel>
  );
};

export default Video;
