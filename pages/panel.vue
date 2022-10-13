<template>
  <div>
		PANEL
    <iframe
    src="https://maps.google.com/maps?q=Tangesir%20Dates%20Products&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
    width=500 height=500 allowfullscreen></iframe>
		<v-btn @click="logout">
			Wyloguj się
		</v-btn>
	</div>
</template>
<script>
export default {
  name: 'PanelPage',
	methods:{
		logout(){
			this.$fire.auth.signOut()
			this.$router.push('/')
		}
	}
}
</script>
