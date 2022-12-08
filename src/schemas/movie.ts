import * as yup from 'yup';

// accepted formats:
// 1h || 1.5h
// 10m
// 10.5m === false
const durationFormat = /((^(\d+(\.\d+)?)+[h]$)|(^[0-9]+[m]$))/;

export const MovieDetail = yup.object().shape({
    id: yup.number(),
    name: yup.string().required(),
    ratings: yup.number().min(0).max(100).required(),
    durationInHours: yup.string().matches(durationFormat, 'Please specify the time in hours or minutes (e.g. 2.5h or 150m)').required(),
});
