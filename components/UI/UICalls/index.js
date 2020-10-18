/* imports */
import { useEffect } from 'react';
/* components */
import ModalConfigGame from '../Modals/ModalConfigGame';
import ModalInput from '../Modals/ModalInput';
import ModalChat from '../Mobile/Chat';
import ModalSettingsSpaceShip from '../Modals/ModalSettingsSpaceShip';
/* redux */
import { useDispatch, useSelector } from 'react-redux';
import {
  showModalInputUser,
  showModalMobileChat,
  hideModalMobileChat,
} from '../../../redux/actions/Modals';

const UICalls = () => {
  const dispatch = useDispatch();
  const showModalInputUserCondition = useSelector(
    (state) => state.modals.showInputUser
  );
  const showModalMobileChatCondition = useSelector(
    (state) => state.modals.showMobileChat
  );
  const showModalSettingsSpaceShipCondition = useSelector(
    (state) => state.modals.showSettingsSpaceship
  );
  const showModalSettingsRoomCondition = useSelector(
    (state) => state.modals.showSettingsRoom
  );

  console.log(showModalMobileChatCondition);
  console.log(showModalInputUserCondition);

  useEffect(() => {
    // localStorage.setItem('user', 'Tom');
    if (!localStorage.getItem('userName')) {
      dispatch(showModalInputUser());
    }
  }, []);

  return (
    <>
      {showModalInputUserCondition && (
        <ModalInput
          message="Enter your nickname"
          submitText="ENTER"
          color="green"
        />
      )}

      {showModalMobileChatCondition && <ModalChat />}

      {showModalSettingsRoomCondition && <ModalConfigGame />}
      
      {showModalSettingsSpaceShipCondition && <ModalSettingsSpaceShip />}
    </>
  );
};

export default UICalls;
