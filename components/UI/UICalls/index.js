/* components */
import ModalConfigGame from '../Modals/ModalConfigGame';
import ModalInput from '../Modals/ModalInput';
import MocalChat from '../Mobile/Chat';

import { useEffect } from 'react';
/* redux */
import { useDispatch, useSelector } from 'react-redux';
import { showModalInputUser } from '../../../redux/actions/InputName';
import { hideModalInputUser } from '../../../redux/actions/InputName';

const UICalls = () => {
  const dispatch = useDispatch();
  const showModalInputUserCondition = useSelector(
    (state) => state.modalInputUser.show
  );

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

      {/* <MocalChat></MocalChat> */}
    </>
  );
};

export default UICalls;
