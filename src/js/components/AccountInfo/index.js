import { connect } from 'react-redux';
import AccountInfo from './AccountInfo';

function mapStoreToProps(store) {
    return {
        email: store.accountInfo.email,
        password: store.accountInfo.password,
        phone: store.accountInfo.phone,
        address: store.accountInfo.address,
        id: store.accountInfo.id
    };
}

export default connect(mapStoreToProps)(AccountInfo);