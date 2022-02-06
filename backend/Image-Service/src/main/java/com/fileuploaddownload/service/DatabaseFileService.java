package com.fileuploaddownload.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.fileuploaddownload.exception.FileNotFoundException;
import com.fileuploaddownload.exception.FileStorageException;
import com.fileuploaddownload.model.DatabaseFile;
import com.fileuploaddownload.repository.DatabaseFileRepository;

@Service
public class DatabaseFileService {

    @Autowired
    private DatabaseFileRepository dbFileRepository;

    public DatabaseFile storeFile(MultipartFile file, Integer propertyId, Integer columnNo) {
        // Normalize file name
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        
  
        try {
            // Check if the file's name contains invalid characters
            if(fileName.contains("..")) {
                throw new FileStorageException("Sorry! Filename contains invalid path sequence " + fileName);
            }

            DatabaseFile dbFile = new DatabaseFile(fileName, file.getContentType(), file.getBytes(),propertyId,columnNo);
            //,propertyId,columnNo

            return dbFileRepository.save(dbFile);
        } catch (IOException ex) {
            throw new FileStorageException("Could not store file " + fileName + ". Please try again!", ex);
        }
    }

//    public DatabaseFile getFile(Integer id1,Integer id2) {
//    	
//    	List<DatabaseFile> data = dbFileRepository.findAll();
//    	List<DatabaseFile> data1 = new ArrayList<>();
//    	
//    	Iterator<DatabaseFile> iterator = data.iterator();
//       
//    	while(iterator.hasNext()) {
//    		DatabaseFile data2 = iterator.next();
//    		if(data2.getColumnNo()==id2 && data2.getPropertyId()==id1) {
//    			String fileId = data2.getId();
//    			return dbFileRepository.findById(fileId).orElseThrow(() -> new FileNotFoundException("File not found with id " + fileId));
//    		}
//    	}
//    }
    


  public DatabaseFile getFile(Integer id1,Integer id2) {
  return dbFileRepository.findByPropertyIdAndColumnNo(id1, id2).get(0);
//          .orElseThrow(() -> new FileNotFoundException("File not found with id " + fileId));
}
  
}
//public Integer getFile(Integer id1, Integer column) {
//return dbFileRepository.findByPidandColumn(id1, column);
//}


//public DatabaseFile getFile(String fileId) {
//    return dbFileRepository.findById(fileId)
//            .orElseThrow(() -> new FileNotFoundException("File not found with id " + fileId));
//}
//}


//public Integer getFile(Integer Id, Integer column ) {
//return dbFileRepository.findByPidandColumn(Id, column);
//      
//} 
