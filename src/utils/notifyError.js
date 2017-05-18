export default function notifyError(error, notify) {
  if (error && typeof error === 'object') {
    for (let i in error) {
      if (error[i].errors && Array.isArray(error[i].errors)) {
        notify(error[i].errors[0].message)
        return
      }
    }
  }
}
