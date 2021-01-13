import React from "react";
import Head from "next/Head";
import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
    const followerList = [
        { nickname: "제로초1" },
        { nickname: "제로초2" },
        { nickname: "제로초2" },
    ];
    const followingList = [
        { nickname: "yoon1" },
        { nickname: "yoon2" },
        { nickname: "yoon3" },
    ];
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>내 프로필 | NodeBird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="팔로잉 목록" data={followingList} />
                <FollowList header="팔로워 목록" data={followerList} />
            </AppLayout>
        </>
    );
};

export default Profile;
