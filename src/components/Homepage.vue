<template>
    <div>
        <hpheading/>
        <hpbtn/>
    </div>
</template>

<script>
import hpheading from './HPComponents/HPHeading'
import hpbtn from './HPComponents/HPBtn'

export default {
  name: 'home',
  components: {
    hpbtn,
    hpheading
  }
}
</script>
