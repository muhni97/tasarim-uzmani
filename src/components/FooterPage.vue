<template>

  <footer>
    <div class="footer container">
      <div class="row text-capitalize text-center">
        <p>2022 &copy; Tasarım Uzmanı | Tüm hakları saklıdır.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
    name : 'FooterPage'
};
</script>

<style>
footer{
    width: 100%;
    height: 200px !important;
    display: flex;
    justify-content: center;
    align-items: center;
}
footer p{
    font-size: 1.2rem;
    color: var(--color-dark);
}
</style>