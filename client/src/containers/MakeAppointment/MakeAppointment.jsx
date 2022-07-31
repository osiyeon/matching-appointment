import { useState } from 'react';
import cx from 'classnames'
import { Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';

import CustomCalender from '../../components/CustomCalender/CustomCalender';

import style from './MakeAppointment.module.scss';

const MakeAppointment = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);
    const [timeDropdown, setTimeDropdown] = useState(false);

    const timeToggle = () => setTimeDropdown((prevState) => !prevState);

    return (
        <div className={style.MakeAppointment}>
            <CustomCalender />
            <div className={style.MakeAppointment__input__wrapper}>
                <div className={style.MakeAppointment__title}>
                    장소 <div className={style.MakeAppointment__title__essn}>*</div>
                </div>
                <Input
                    placeholder="장소를 입력해주세요."
                    className={style.MakeAppointment__input}
                />
            </div>
            <div className={style.MakeAppointment__input__wrapper}>
                <div className={style.MakeAppointment__title}>
                    제목 <div className={style.MakeAppointment__title__essn}>*</div>
                </div>
                <Input
                    placeholder="약속 이름을 입력해주세요."
                    className={style.MakeAppointment__input}
                />
            </div>
            <div className={style.MakeAppointment__input__wrapper}>
                <div className={style.MakeAppointment__title}>내용</div>
                <Input
                    placeholder="ex) 늦게온 사람 아이스크림 쏘기. / 근처 건물 : 스타벅스 있음."
                    type="textarea"
                    className={style.MakeAppointment__input__content}
                />
            </div>
            <div className={style.MakeAppointment__input__wrapper}>
                <div className={style.MakeAppointment__title}>참가 인원 추가</div>
                <div className={style.MakeAppointment__members}>선택한 인원이 없습니다.</div>
            </div>
            <div className={style.MakeAppointment__dropdown__wrapper}>
                <div>
                    <div className={style.MakeAppointment__title}>시간 선택 범위 </div>
                    <div className={style.MakeAppointment__message}>
                        직접입력의 경우 숫자만 입력해주세요.
                    </div>
                </div>
                <Dropdown
                    isOpen={timeDropdown}
                    toggle={timeToggle}
                    className={style.MakeAppointment__dropdown}
                >
                    <DropdownToggle caret>선택 안함</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>1시간</DropdownItem>
                        <DropdownItem>2시간</DropdownItem>
                        <DropdownItem>3시간</DropdownItem>
                        <DropdownItem>4시간</DropdownItem>
                        <DropdownItem>5시간</DropdownItem>
                        <DropdownItem>직접 입력</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
            <div className={style.MakeAppointment__dropdown__wrapper}>
                <div>
                    <div className={style.MakeAppointment__title}>
                        투표 마감 시간 <div className={style.MakeAppointment__title__essn}>*</div>
                    </div>
                </div>
                <Dropdown
                    isOpen={dropdownOpen}
                    toggle={toggle}
                    className={style.MakeAppointment__dropdown}
                >
                    <DropdownToggle caret>선택 안함</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>1시간</DropdownItem>
                        <DropdownItem>2시간</DropdownItem>
                        <DropdownItem>3시간</DropdownItem>
                        <DropdownItem>4시간</DropdownItem>
                        <DropdownItem>5시간</DropdownItem>
                        <DropdownItem>직접 입력</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
            <div className={style.MakeAppointment__dropdown__wrapper}>
                <div className={style.MakeAppointment__title}>투표 강제 종료</div>
                <div className={style.MakeAppointment__toggleButton}>
                    <label className={style.MakeAppointment__switch}>
                        <input id="toggleImage" type="checkbox" />
                        <span className={cx(style.MakeAppointment__slider, style.MakeAppointment__round)}></span>
                    </label>
                </div>
            </div>
            <div className={style.MakeAppointment__button__wrapper}>
                <Button className={style.MakeAppointment__cancleButton}>취소</Button>
                <Button className={style.MakeAppointment__createButton}>만들기</Button>
            </div>
        </div>
    );
};

export default MakeAppointment;