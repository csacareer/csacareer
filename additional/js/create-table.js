function createCourseTable(){
    $(document).ready(function(){
        $.getJSON("", function(data){
            var engc_data = '';
            $.each(data, function(key, value){
                engc_data += '<tr>';
                engc_data += '<tr>'+value.name+'</td>';
                engc_data += '<tr><a href="'+value.link+'">'+value.link+'</a></td>';
                engc_data += '</tr>';
            });
            $('#engc_table').append(engc_data);
        });
    });
}