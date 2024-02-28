<template>
    <input type="file" id="inputFile" @change="onChange($event)">
    {{saveGame.player?.name}}
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const onChange = (event) => {
      fileUploaded(event)
    }

    let saveGame = ref({})

    function fileUploaded(event) {
    let file = event.target.files[0]
    let reader = new FileReader()
    reader.readAsText(file)

    reader.onload = () => {

        try {
            let xmlInfo = new DOMParser().parseFromString(reader.result, 'application/xml')
            let jsonInfo = xml2json(xmlInfo)
            
            saveGame.value.player = jsonInfo.SaveGame.player            
        } catch (e) {
            console.error("Error parsing XML:", e);
        }
	}
}

function xml2json(xml) {
  try {
    var obj = {};
    if (xml.children.length > 0) {
      for (var i = 0; i < xml.children.length; i++) {
        var item = xml.children.item(i);
        var nodeName = item.nodeName;

        if (typeof (obj[nodeName]) == "undefined") {
          obj[nodeName] = xml2json(item);
        } else {
          if (typeof (obj[nodeName].push) == "undefined") {
            var old = obj[nodeName];

            obj[nodeName] = [];
            obj[nodeName].push(old);
          }
          obj[nodeName].push(xml2json(item));
        }
      }
    } else {
      obj = xml.textContent;
    }
    return obj;
  } catch (e) {
      console.log(e.message);
  }
}

    return {
      onChange,
      saveGame,
    }
  }
}
</script>