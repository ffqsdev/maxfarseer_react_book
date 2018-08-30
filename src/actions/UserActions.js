export const LOGIN_REQUEST = "LOGIN_REQUEST"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"


export function login() {
    return (dispatch) => {
        dispatch({
            type: LOGIN_REQUEST
        })

        //eslint-disable-next-line no-undef
        VK.Auth.login(r => {
            if (r.session) {
                let user = {
                    name: r.session.user.first_name,
                    surname: r.session.user.last_name
                }

                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: user
                })

            } else {
                dispatch({
                    type: LOGIN_FAILURE,
                    error: true,
                    payload: new Error('Auth is failed')
                })
            }
        }, 4)
    }
}

