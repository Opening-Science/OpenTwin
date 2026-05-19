<template>
  <div class="flex min-h-screen flex-col">
    <AppHeader />
    <main id="main-content" class="flex-1 pt-header-mobile lg:pt-header">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
