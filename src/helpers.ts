async function goToPage(router: any, page: string) {
  await router.push({ path: page })
  // window.location.href = page
}

export { goToPage }
