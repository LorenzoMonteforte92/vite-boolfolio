<script>
export default {
    name: 'AppContactUs'
}
</script>

<template>
    <div class="container">
        <div class="row">
            <h1>Contact Us</h1>
            <div class="col mt-5">
                <form>
                    <div class="mb-3">
                        <label for="userName" class="form-label">Name</label>
                        <input type="text" class="form-control" id="userName">
                    </div>
                    <div class="mb-3">
                        <label for="userMail" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="userMail" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label">Your Message</label>
                        <textarea class="form-control" id="message" rows="10"></textarea>
                    </div>
                    <!-- <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div> -->
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>