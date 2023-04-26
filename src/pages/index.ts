import { lazy } from 'react';

export const Main = lazy(() => import('./Main'));
export const Login = lazy(() => import('./Login'));
export const Community = lazy(() => import('./CardList'));
export const NewPost = lazy(() => import('./NewPost'));
export const MyPage = lazy(() => import('./MyPage'));
export const CardList = lazy(() => import('./CardList'));
export const CardDetail = lazy(() => import('./CardDetail'));
export const CardSearch = lazy(() => import('./CardSearch'));
export const CommentAnswer = lazy(() => import('./CommentAnswer'));
export const AuthExpert = lazy(() => import('./AuthExpert'));
export const Signup = lazy(() => import('./Signup'));
export const PetProfile = lazy(() => import('./PetProfile'));
export const PetProfileEditor = lazy(() => import('./PetProfileEditor'));
export const ExpertProfile = lazy(() => import('./ExpertProfile'));
export const ExpertProfileEditor = lazy(() => import('./ExpertProfileEditor'));
export const ExpertList = lazy(() => import('./ExpertCardList'));
export const MyActivityInfo = lazy(() => import('./MyActivityInfo'));
export const MyProfileEditor = lazy(() => import('./MyProfileEditor'));
export const KakaoLogin = lazy(() => import('./Login/Kakao'));
export const Account = lazy(() => import('./MyPage/Account'));
export const Withdrawal = lazy(() => import('./MyPage/Withdrawal'));
export const NotFound = lazy(() => import('./NotFound'));
export const Notification = lazy(() => import('./Notification'));
export const Bookmark = lazy(() => import('./Bookmark'));
export const ChangeMyPassword = lazy(() => import('./MyPage/ChangePassword'));
export const FindIdPw = lazy(() => import('./FindAccount'));
export const FindId = lazy(() => import('./FindAccount/Id'));
export const FindPw = lazy(() => import('./FindAccount/Password'));
