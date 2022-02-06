package com.fileuploaddownload.controller;


import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.fileuploaddownload.model.DatabaseFile;
import com.fileuploaddownload.service.DatabaseFileService;

@CrossOrigin("http://localhost:4200")
@RestController
public class FileDownloadController {

    @Autowired
    private DatabaseFileService fileStorageService;

    @GetMapping("/downloadFile/{id1}/{id2}")
    public ResponseEntity<String> downloadFile(@PathVariable Integer id1,@PathVariable Integer id2,HttpServletRequest request) {
    	//, @PathVariable Integer id2 
        // Load file as Resource
       DatabaseFile databaseFile = fileStorageService.getFile(id1,id2);
       
       String filePath = "src/main/resources/static/" + databaseFile.getFileName();
     
       try {
		FileOutputStream out = new FileOutputStream(new File(filePath));
		out.write(databaseFile.getData());
		out.close();
	} catch (Exception e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
       
//       try {
//		FileWriter writer = new FileWriter(databaseFile.getFileName());
//		writer
//	} catch (IOException e) {
//		// TODO Auto-generated catch block
//		e.printStackTrace();
//	}

       String finalFilePath = "http://localhost:4000/" + databaseFile.getFileName();
       ResponseEntity<String> resp = new ResponseEntity<String>(finalFilePath, HttpStatus.OK);
       return resp;
        /*return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(databaseFile.getFileType()))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + databaseFile.getFileName() + "\"")
                .body(new ByteArrayResource(databaseFile.getData()));*/
                
       
    }

}
