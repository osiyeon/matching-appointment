import Header from '../components/Header/Header';
import AppointmentList from '../containers/AppointmentList/AppointmentList';

const MainList = () => {
    return (
        <>
            <Header title="약속 잡기" addButton introButton />
            <AppointmentList />
        </>
    );
};

export default MainList;