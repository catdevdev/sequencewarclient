/* components */
import ModalConfigGame from '../Modals/ModalConfigGame';
import ModalInput from '../Modals/ModalInput';
import ModalChat from '../Mobile/Chat';

import { useEffect } from 'react';
/* redux */
import { useDispatch, useSelector } from 'react-redux';
import { showModalInputUser } from '../../../redux/actions/InputName';
import {
  showModalMobileChat,
  hideModalMobileChat,
} from '../../../redux/actions/Chat';

const UICalls = () => {
  const dispatch = useDispatch();
  const showModalInputUserCondition = useSelector(
    (state) => state.modalInputUser.show
  );
  const showModalMobileChatCondition = useSelector(
    (state) => state.chat.showMobileChat
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
      {/* <ModalConfigGame></ModalConfigGame> */}

      {showModalMobileChatCondition && <ModalChat></ModalChat>}
      
    </>
  );
};

export default UICalls;
