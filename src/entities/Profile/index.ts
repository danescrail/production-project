import { Profile, ProfileSchema } from "./model/types/profile";
import { profileActions, profileReducer } from "./model/slice/profileSlice";
import { fetchProfileData } from "./model/services/fetchProfileData/fetchProfileData";
import { updateProfileData } from "./model/services/updateProfileData/updateProfileData";
import { ProfileCard } from "./ui/ProfileCard/ProfileCard";
import { getProfileData } from "./model/selectors/getProfileData/getProfileData";
import { getProfileError } from "./model/selectors/getProfileError/getProfileError";
import { getProfileIsLoading } from "./model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileReadonly } from "./model/selectors/getProfileReadonly/getProfileReadonly";
import { getProfileForm } from "./model/selectors/getProfileForm/getProfileForm";

export {
    type Profile,
    type ProfileSchema,

    ProfileCard,

    profileActions,
    profileReducer,

    fetchProfileData,
    updateProfileData,

    getProfileData,
    getProfileError,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileForm
}