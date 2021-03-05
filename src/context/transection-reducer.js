export default function transectionReducer(transections, action) {
  switch (action.type) {
    case 'ADD_TRANSECTION':
      return [action.payload, ...transections]
    case 'DELETE_TRANSECTION':
      return [
        ...transections.filter(
          (transection) => transection.id !== action.payload
        ),
      ]

    default:
      return [...transections]
  }
}
