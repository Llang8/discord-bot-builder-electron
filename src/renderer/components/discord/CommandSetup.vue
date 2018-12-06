<template>
<div class="col-sm-8" id="command-menu">
    <div class="form-group">
        <label for="commandName">Command Name</label>
        <input type="text" class="form-control" id="commandName" placeholder="Command Name">
        <br>
        <label for="commandRestrictions">Command Restrictions</label>
        <select type="text" class="form-control" style="color: white;" id="commandRestrictions">
            <option>Server Only</option>
            <option></option>
        </select>
        <br>
        <label for="userPermissions">Necessary User Permission</label>
        <select type="text" class="form-control" style="color: white;" id="commandRestrictions">
            <option>None</option>
            <option></option>
        </select>
        <div class="btn-group" id="action-toolbar">
            <button class="btn" id="createAction" ><i class="far fa-plus-square"></i>  Create</button>
            <button class="btn" id="editAction" ><i class="fas fa-edit"></i>  Edit</button>
            <button class="btn" id="deleteAction" ><i class="far fa-trash-alt"></i>  Delete</button>
        </div>
    </div>
</div>
</template>
<script>
export default {

}
</script>
<style>
#action-toolbar{
    padding-top: 20px;
    position: absolute;
    right: 15px;
}
</style>