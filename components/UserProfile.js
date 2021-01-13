import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";

const UserProfile = ({ setIsLoggedIn }) => {
    const onLogout = useCallback(() => {
        setIsLoggedIn(false);
    }, []);
    return (
        <Card
            actions={[
                <div key="twit">
                    짹짹
                    <br />0
                </div>,
                <div key="followings">
                    팔로윙
                    <br />0
                </div>,
                <div key="followings">
                    팔로워
                    <br />0
                </div>,
            ]}
        >
            <Card.Meta avatar={<Avatar>Yoon</Avatar>} title="Yoon" />
            <Button onClick={onLogout}>로그아웃</Button>
        </Card>
    );
};

export default UserProfile;
