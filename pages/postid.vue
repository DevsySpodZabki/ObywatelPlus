<template>
    <div class="curved-background">
      <v-main>
        <v-container style="margin-top:100px;">
            <v-card
            :loading="loading"
            class="mx-auto"
            color="rgb(0, 0, 0, 0.1)"
            rounded
            >   
                <v-card-title class="headline mb-1">Cześć</v-card-title>
                <v-card-subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin sagittis nisl rhoncus mattis rhoncus urna. At risus viverra adipiscing at in tellus. Ac turpis egestas sed tempus urna et pharetra pharetra. Eget nunc lobortis mattis aliquam faucibus. Sed nisi lacus sed viverra tellus in. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Ac tortor dignissim convallis aenean et tortor. Massa massa ultricies mi quis hendrerit dolor magna eget est. Ut faucibus pulvinar elementum integer enim neque. Tortor condimentum lacinia quis vel eros donec ac.</v-card-subtitle>
                <v-card-text>Post utworzony przez: Imie nazwisko</v-card-text>
            </v-card>
        </v-container>
      </v-main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PostID',
    data: () => ({
      items: [
        {
          text: 'Strona główna',
          disabled: false,
          href: '/',
        },
        {
          text: 'Kontrola samorządów',
          disabled: false,
          href: 'kontrola',
        },
        {
          text: 'Ten post',
          disabled: true,
          href: '',
        },
      ],
    }),
}
</script>