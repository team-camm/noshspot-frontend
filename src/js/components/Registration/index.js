import { connect } from 'react-redux';
import UserRegistration from './UserRegistration';

function mapStoreToProps(store) {
    return {
        temp: {
          email: store.registeredInfo.temp.email,
          password: store.registeredInfo.temp.password,
          fullName: store.registeredInfo.temp.fullName,
          phone: store.registeredInfo.temp.phone,
          address: store.registeredInfo.temp.address

        },
        current: {
          email: store.registeredInfo.current.email,
          password: store.registeredInfo.current.password,
          fullName: store.registeredInfo.current.fullName,
          phone: store.registeredInfo.current.phone,
          address: store.registeredInfo.current.address,
          id: store.registeredInfo.current.id
        }
    };
}

export default connect(mapStoreToProps)(UserRegistration);