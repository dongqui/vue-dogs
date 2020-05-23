const fetchEntity = (entity, apiFn) => async (context, params) => {
  context.commit(entity.request())
  try {
    const response= await apiFn(params);
    context.commit(entity.success(response))
  } catch (e) {
    context.commit(entity.failure(e))
  }
}
