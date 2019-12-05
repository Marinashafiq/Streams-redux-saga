import streams from './apis/streams';

let handlerEnabled = true;
const getStreams = async () => await streams.get('/streams', { handlerEnabled });
const getStream = async (id) => await streams.get(`/streams/${id}`);
const addStream = async data => await streams.post(`/streams`, data);
const editStream = async (payload) => await streams.patch(`/streams/${payload.id}`, payload.data);
const deleteStream = async id => {
    console.log(id);
    return await streams.delete(`/streams/${id}`)
};


export default { getStreams, getStream, addStream, editStream, deleteStream };