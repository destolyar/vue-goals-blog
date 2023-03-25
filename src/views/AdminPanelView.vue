<script lang="ts">
import AdminLogin from '@/components/Admin/AdminLogin.vue';
import AdminActions from '@/components/Admin/AdminActions.vue';
import PageTitle from '@/components/sharedComponent/PageTitle.vue'
import AdminLayout from '@/components/Layouts/AdminLayout.vue';


export default {
  data() {
    return {
      isAdminVisible: false,
    };
  },
  components: { AdminLogin, AdminActions, PageTitle, AdminLayout }
}
</script>

<template>
  <AdminLayout>
    <PageTitle title="Admin actions" :class=$style.adminPanelTitle />
    <AdminLogin @checkAdmin="isAdminVisible = $event" v-if="!isAdminVisible" />
    <AdminActions v-if="isAdminVisible" />
  </AdminLayout>
</template>

<style module lang="scss">
.adminPanelTitle {
  margin-bottom: 30px;
}
</style>