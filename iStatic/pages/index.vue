<template>
  <div id="app">
  <v-app id="inspire">

    <v-navigation-drawer
     app dark class="primary lighten-3"
      fixed
      :clipped="$vuetify.breakpoint.mdAndUp"
      v-model="drawer"
    >
      <v-list dense>
        
        <template v-for="item in items">
          
          <v-layout
            row
            v-if="item.heading"
            align-center
            :key="item.heading"
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            v-model="item.model"
            :key="item.text"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-for="(child, i) in item.children"
              :key="i"
              @click=";"
            >

              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
  
          
        <v-list-tile v-else @click="$data[item.myDialog]  = '!' + item.myDialog" :key="item.text">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
    
        </template>
        
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="blue darken-3"
      dark
      app
      :clipped-left="$vuetify.breakpoint.mdAndUp"
      fixed
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">iStatic</span>
      </v-toolbar-title>
      
        <v-spacer></v-spacer>

      <v-tooltip>
        <v-btn icon large slot="activator">
          <v-icon>exit_to_app</v-icon>
        </v-btn>
          <span>Log Out</span>
      </v-tooltip>
      
    </v-toolbar>

    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <!-- Centered for editor -->
          <!--
         <template>
            <section class="container">
              <div class="quill-editor" 
                :content="content"
                @change="onEditorChange($event)"
                @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)"
                @ready="onEditorReady($event)"
                v-quill:myQuillEditor="editorOption">
              </div>
          </section>
        </template> 
        -->

        </v-layout>
      </v-container>
    </v-content>

    <v-dialog v-model="Dialognote" width="800px">
      <v-card>
        <v-card-title
          class="grey lighten-4 py-4 title"
        >
          Open Page
        </v-card-title>
        <v-container grid-list-sm class="pa-4">
          
          <v-layout>
            <v-flex md16 d-flex>
                
            <v-list-tile-title>
              <span class="title">Choose a site</span>
            </v-list-tile-title>
            <div>
            <select id="website" multiple size="8">
              <option value="1">MichiganCivicCoders_org</option>
              <option value="2">SeedChoices_com</option>
              <option value="3">SeedMarketplace_com</option>
              <option value="4">iStatic_io</option>
              <option value="5">LansingGeeks_com</option>
              <option value="6">BulldogForms_com</option>
            </select>
            </div>
            <div>
            <v-list-tile-title>
              <span class="title">Pick a file</span>
            </v-list-tile-title>
            <select id="fileChoice" multiple size="8">
              <option value="1">index.html            7/31/2018   125 kb</option>
              <option value="2">aboutus.html          7/29/2018   201 kb</option>
              <option value="3">products.html         7/27/2018   275 kb</option>
              <option value="4">blog.html             7/30/2018   177 kb</option>
              <option value="5">contact.html          7/21/2018    49 kb </option>
              <option value="6">mailform.html         8/02/2018   102 kb </option>
            </select>
            </div>
            </v-flex>
          </v-layout>
          
        </v-container>
        <v-card-actions>
          
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="Dialognote = false">Cancel</v-btn>
          <v-btn flat @click="Dialognote = false">Open</v-btn>
        </v-card-actions>
      </v-card>
</v-dialog>

<v-dialog v-model="Dialogsave" width="800px">
      <v-card>
        <v-card-title
          class="grey lighten-4 py-4 title"
        >
          Save Draft
        </v-card-title>
        <v-container grid-list-sm class="pa-4">
          <v-layout row wrap>
            
            <h1>Success </h1>
            
          </v-layout>
        </v-container>
        <v-card-actions>
          
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="Dialogsave = false">Cancel</v-btn>
          <v-btn flat @click="Dialogsave = false">Open</v-btn>
        </v-card-actions>
      </v-card>
</v-dialog>

<v-dialog v-model="Dialognote_add" width="800px">
      <v-card>
        <v-card-title
          class="grey lighten-4 py-4 title"
        >
          New Page
        </v-card-title>
        <v-container grid-list-sm class="pa-4">
          <v-layout row wrap>
            
            <h1>Success </h1>
            
          </v-layout>
        </v-container>
        <v-card-actions>
          
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="Dialognote_add = false">Cancel</v-btn>
          <v-btn flat @click="Dialognote_add = false">Open</v-btn>
        </v-card-actions>
      </v-card>
</v-dialog>

<v-dialog v-model="Dialogsave_alt" width="800px">
      <v-card>
        <v-card-title
          class="grey lighten-4 py-4 title"
        >
          Save As
        </v-card-title>
        <v-container grid-list-sm class="pa-4">
          <v-layout row wrap>
            
            <h1>Success </h1>
            
          </v-layout>
        </v-container>
        <v-card-actions>
          
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="Dialogsave_alt = false">Cancel</v-btn>
          <v-btn flat @click="Dialogsave_alt = false">Open</v-btn>
        </v-card-actions>
      </v-card>
</v-dialog>

<v-dialog v-model="Dialoginsert_photo" width="800px">
      <v-card>
        <v-card-title
          class="grey lighten-4 py-4 title"
        >
          Add Media
        </v-card-title>
        <v-container grid-list-sm class="pa-4">
          <v-layout row wrap>
            
            <h1>Success </h1>
            
          </v-layout>
        </v-container>
        <v-card-actions>
          
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="Dialoginsert_photo = false">Cancel</v-btn>
          <v-btn flat @click="Dialoginsert_photo = false">Open</v-btn>
        </v-card-actions>
      </v-card>
</v-dialog>

<v-dialog v-model="Dialogextension" width="800px">
      <v-card>
        <v-card-title
          class="grey lighten-4 py-4 title"
        >
          Elements
        </v-card-title>
        <v-container grid-list-sm class="pa-4">
          <v-layout row wrap>
            
            <h1>Success </h1>
            
          </v-layout>
        </v-container>
        <v-card-actions>
          
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="Dialogextension = false">Cancel</v-btn>
          <v-btn flat @click="Dialogextension = false">Open</v-btn>
        </v-card-actions>
      </v-card>
</v-dialog>

<v-dialog v-model="Dialogbuild" width="800px">
      <v-card>
        <v-card-title
          class="grey lighten-4 py-4 title"
        >
          Form Builder
        </v-card-title>
        <v-container grid-list-sm class="pa-4">
          <v-layout row wrap>
            
            <h1>Success </h1>
            
          </v-layout>
        </v-container>
        <v-card-actions>
          
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="Dialogbuild = false">Cancel</v-btn>
          <v-btn flat @click="Dialogbuild = false">Open</v-btn>
        </v-card-actions>
      </v-card>
</v-dialog>

<v-dialog v-model="Dialogschedule" width="800px">
      <v-card>
        <v-card-title
          class="grey lighten-4 py-4 title"
        >
          Schedule Post
        </v-card-title>
        <v-container grid-list-sm class="pa-4">
          <v-layout row wrap>
            
            <h1>Success </h1>
            
          </v-layout>
        </v-container>
        <v-card-actions>
          
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="Dialogschedule = false">Cancel</v-btn>
          <v-btn flat @click="Dialogschedule = false">Open</v-btn>
        </v-card-actions>
      </v-card>
</v-dialog>

<v-dialog v-model="Dialogsettings" width="800px">
      <v-card>
        <v-card-title
          class="grey lighten-4 py-4 title"
        >
          Settings
        </v-card-title>
        <v-container grid-list-sm class="pa-4">
          <v-layout row wrap>
            
            <h1>Success </h1>
            
          </v-layout>
        </v-container>
        <v-card-actions>
          
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="Dialogsettings = false">Cancel</v-btn>
          <v-btn flat @click="Dialogsettings = false">Open</v-btn>
        </v-card-actions>
      </v-card>
</v-dialog>


    
  </v-app>
</div>
</template>

<script>
 new Vue({
  el: '#app',
  data: () => ({
      Dialognote: null,
      Dialogsave: null,
      Dialognote_add: null,
      Dialogsave_alt: null,
      Dialoginsert_photo: null,
      Dialogextension: null,
      Dialogbuild: null,
      Dialogschedule: null,
      Dialogsettings: null,
      drawer: null,
      myDialog: null,
      items: [
        { icon: 'note', text: 'Page Open', myDialog: 'Dialognote' },
        { icon: 'save', text: 'Save Draft', myDialog: 'Dialogsave' },
        { icon: 'note_add', text: 'New Page', myDialog: 'Dialognote_add' },
        { icon: 'save_alt', text: 'Save As', myDialog: 'Dialogsave_alt' },
        { icon: 'insert_photo', text: 'Add Media', myDialog: 'Dialoginsert_photo'},
        { icon: 'extension', text: 'Elements', myDialog: 'Dialogextension'},
        { icon: 'build', text: 'Form Builder', myDialog: 'Dialogbuild' },
        { icon: 'schedule', text: 'Schedule Post', myDialog: 'Dialogschedule' },
        { icon: 'settings', text: 'Settings', myDialog: 'Dialognotesettings' },
        
      ]
    })
    
})

</script>

<script>
  export default {
    data() {
      return {
        clipped: false,
        drawer: true,
        Dialognote: null,
        Dialogsave: null,
        Dialognote_add: null,
        Dialogsave_alt: null,
        Dialoginsert_photo: null,
        Dialogextension: null,
        Dialogbuild: null,
        Dialogschedule: null,
        Dialogsettings: null,
        fixed: false,
        myDialog: null,
        items: [
          { icon: 'note', text: 'Page Open', myDialog: 'Dialognote' },
          { icon: 'save', text: 'Save Draft', myDialog: 'Dialogsave' },
          { icon: 'note_add', text: 'New Page', myDialog: 'Dialognote_add' },
          { icon: 'save_alt', text: 'Save As', myDialog: 'Dialogsave_alt' },
          { icon: 'insert_photo', text: 'Add Media', myDialog: 'Dialoginsert_photo' },
          { icon: 'extension', text: 'Elements', myDialog: 'Dialogextension' },
          { icon: 'build', text: 'Form Builder', myDialog: 'Dialogbuild' },
          { icon: 'schedule', text: 'Schedule Post', myDialog: 'Dialogschedule' },
          { icon: 'settings', text: 'Settings', myDialog: 'Dialogsettings' },
           
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js',
 //       content: '<p>I am Example</p>',
 //       editorOption: {
          // some quill options
//          modules: {
//            toolbar: [
 //             ['bold', 'italic', 'underline', 'strike'],
 //             ['blockquote', 'code-block']
 //           ]
//          }
//        }
//      }
//    },
//    mounted() {
//      console.log('app init, my quill insrance object is:', this.myQuillEditor)
//      setTimeout(() => {
//        this.content = 'i am changed'
 //     }, 3000)
 //   },
//    methods: {
//      onEditorBlur(editor) {
//        console.log('editor blur!', editor)
//      },
//      onEditorFocus(editor) {
//        console.log('editor focus!', editor)
//      },
//      onEditorReady(editor) {
//        console.log('editor ready!', editor)
//      },
//      onEditorChange({ editor, html, text }) {
//        console.log('editor change!', editor, html, text)
//        this.content = html
//      }
    
  },
        props: ['myDialog']
        }
      
    
  
</script>


// <style lang="scss" scoped>
//  .container {
//    width: 60%;
//    margin: 0 auto;
//    padding: 50px 0;
//    .quill-editor {
//      min-height: 200px;
//      max-height: 400px;
//      overflow-y: auto;
//    }
//  }
// </style>

