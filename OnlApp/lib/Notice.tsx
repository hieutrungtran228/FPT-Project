import { showMessage } from "react-native-flash-message";

const showNotice = () => {
    showMessage({
        message: 'Message',
        type:'info',
    });
}

export default showNotice