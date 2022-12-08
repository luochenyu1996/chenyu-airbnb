import chenyuRequest from "../"

export function getEntireRoomList(offset, size) {
    return chenyuRequest.get({
            url: "entire/list",
            params: {
                offset,
                size,
            }
        }
    )
}
